export enum SelectedPage {
  Inicio = "inicio",
  Beneficios = "beneficios",
  NuestrasClases = "nuestrasclases",
  Contactanos = "contactanos",
}

export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string,
}
