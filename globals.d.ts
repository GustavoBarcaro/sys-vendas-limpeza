// globals.d.ts
declare module '*.module.css';
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
