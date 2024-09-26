import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Aviso } from '../Modelo/Aviso';


@Injectable({
  providedIn: 'root'
})
export class AvisoBDService {

  private aviso: Aviso[] = []

  sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  db!: SQLiteDBConnection;
  plataforma: string = "";
  DB_ENCRIPTADA: boolean=false;
  DB_MODE: string = "no-encryption";
  DB_VERSION: number=1;
  DB_READ_ONLY: boolean=false;

  // Definir el nombre de la base de datos y las tablas
  DB_NAME: string = 'avisoDB';
  DB_SQL_TABLAS: string = `
    CREATE TABLE IF NOT EXISTS avisos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT,
      foto TEXT,
      fecha Date
    );
  `;
  

  constructor() { }

  // Método para iniciar SQLite en la plataforma web
  async _iniciarPluginWeb(): Promise<void> {
    await customElements.whenDefined('jeep-sqlite');
    const jeepSqliteEl = document.querySelector("jeep-sqlite");
    if (jeepSqliteEl != null) {
      await this.sqlite.initWebStore();
    }
  }

  // Método para iniciar el plugin dependiendo de la plataforma
  async iniciarPlugin() {
    this.plataforma = Capacitor.getPlatform();
    if (this.plataforma === "web") {
      await this._iniciarPluginWeb();
    }
    await this.abrirConexion()
    await this.db.execute(this.DB_SQL_TABLAS)
    
  }

  // Método para abrir la conexión a la base de datos
  async abrirConexion() {
    const ret = await this.sqlite.checkConnectionsConsistency()
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
    if (ret.result && isConn){
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)
    }else{
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }
    await this.db.open()
  }

  // Método para agregar un aviso a la base de datos
  async agregarAviso(titulo: string, descripcion: string, foto: string, fecha: string) {
    try {
      const query = `INSERT INTO avisos (titulo, descripcion, foto, fecha) VALUES (?, ?, ?, ?)`;
      await this.db.run(query, [titulo, descripcion, foto, fecha]);
    } catch (error) {
      console.error("Error al agregar aviso:", error);
    }
  }

  // Método para obtener todos los avisos
  async getAvisos(): Promise<Aviso[]> {
    try {
      const query = `SELECT * FROM avisos`;
      const res = await this.db.query(query);
      return res.values || [];
    } catch (error) {
      console.error("Error al obtener avisos:", error);
      return [];
    }
  }
  

  // Método para eliminar un aviso por su id
  // Método para eliminar un aviso por su id
async eliminarAviso(id: number) {
  try {
    const query = `DELETE FROM avisos WHERE id = ?`;
    await this.db.run(query, [id]); // Ejecutar la consulta de eliminación
    this.aviso = await this.getAvisos(); // Actualizar el array de avisos
  } catch (error) {
    console.error("Error al eliminar aviso:", error);
  }
}

}
