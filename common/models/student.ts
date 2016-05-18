export class Student{
    
    private _Name : string;
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    
    private _Age : number;
    public get Age() : number {
        return this._Age;
    }
    public set Age(v : number) {
        this._Age = v;
    }
    
    
    private _Sex : string;
    public get Sex() : string {
        return this._Sex;
    }
    public set Sex(v : string) {
        this._Sex = v;
    }
    
}