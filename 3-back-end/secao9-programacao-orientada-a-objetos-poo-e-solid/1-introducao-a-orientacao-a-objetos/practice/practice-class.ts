class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], cTo: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = cTo;
  }
}