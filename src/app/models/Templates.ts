import ITemplates = require('./interfaces/ITemplates');
class Templates {
    private _TemplateModel: ITemplates;

    constructor(TemplateModel: ITemplates){
        this._TemplateModel = TemplateModel
    }

    get content() : string{
        return this._TemplateModel.content + "12";
    }

    get time_created() : number{
        return this._TemplateModel.time_created;
    }
    get time_updated() : number{
        return this._TemplateModel.time_updated;
    }

}

Object.seal(Templates);
export = Templates;