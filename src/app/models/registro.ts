export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public create: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.create = new Date();
        this.determinarTipo();
    }


    private determinarTipo() {
        const inicioTexto = this.text.substr(0, 4);
        console.log('TIPO', inicioTexto);
        switch (inicioTexto) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
                break;
            default:
                this.type = 'no reconocido';
                this.icon = 'create';

        }
    }
}
