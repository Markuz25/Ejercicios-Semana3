class Usuario {

    static contadorUsuarios = 0;

    constructor(nombre, apellido, password, email) {
        this._idUsuario = ++Usuario.contadorUsuarios;
        this._nombre = nombre;
        this._apellido = apellido;
        this._password = password;
        this._email = email;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apellidos() {
        return this._apellido;
    }

    set apellidos(apellido) {
        return this._apellido = apellido;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        return this._password = password;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        return this._email = email;
    }

    nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }
}