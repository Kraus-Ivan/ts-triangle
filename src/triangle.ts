export class Triangle {
    private a: number;
    private b: number;
    private c: number;
  
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get A(): number {
      return this.a;
    }
  
    set A(value: number) {
      this.a = value;
    }
  
    get B(): number {
      return this.b;
    }
  
    set B(value: number) {
      this.b = value;
    }
  
    get C(): number {
      return this.c;
    }
  
    set C(value: number) {
      this.c = value;
    }
  
    get LongestSide(): number {
      return Math.max(this.a, this.b, this.c);
    }
  
    get Constructable(): boolean {
      return (this.Perimeter - this.LongestSide) > this.LongestSide;
    }
  
    get Perimeter(): number {
      return this.a + this.b + this.c;
    }
  
    get halfPerimeter(): number {
      return this.Perimeter / 2;
    }
  
    get Alpha(): number {
      return 2 * Math.asin(Math.sqrt(((this.halfPerimeter - this.b)*(this.halfPerimeter - this.c)) / (this.b * this.c)));
    }
  
    get Beta(): number {
      return 2 * Math.asin(Math.sqrt(((this.halfPerimeter - this.c)*(this.halfPerimeter - this.a)) / (this.a * this.c)));
    }
  
    get Gamma(): number {
      return 2 * Math.asin(Math.sqrt(((this.halfPerimeter - this.a)*(this.halfPerimeter - this.b)) / (this.a * this.b)));
    }
  
    get CircumscribedCircle(): number {
      return this.a / (2 * Math.sin(this.Alpha));
    }
  
    get Content(): number {
      return Math.sqrt(this.halfPerimeter * (this.halfPerimeter - this.a) * (this.halfPerimeter - this.b) * (this.halfPerimeter - this.c));
    }
  
    get HeightA(): number {
      return this.b * Math.sin(this.Gamma);
    }
  
    get HeightB(): number {
      return this.c * Math.sin(this.Alpha);
    }
  
    get HeightC(): number {
      return this.a * Math.sin(this.Beta);
    }
  
    get FootA(): number {
      return this.b * Math.cos(this.Gamma);
    }
  
    get FootB(): number {
      return this.c * Math.cos(this.Alpha);
    }
  
    get FootC(): number {
      return this.a * Math.cos(this.Beta);
    }
  
    get CoordA(): {x: number, y: number} {
      return {x: 0, y: 0};
    }
  
    get CoordB(): {x: number, y: number} {
      return {x: this.a, y: 0};
    }
  
    get CoordC(): {x: number, y: number} {
      return {x: this.A - this.FootA, y: this.HeightA};
    }
  }
  