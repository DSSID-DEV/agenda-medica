export enum EspecialidadesMedicas {
  ALERGOLOGIA = "Alergologia",
  ANESTESIOLOGIA = "Anestesiologia",
  ANGIOLOGIA = "Angiologia",
  CANCEROLOGIA = "Cancerologia",
  CARDIOLOGIA = "Cardiologia",
  CIRURGIA_CARDIOVASCULAR = "Cirurgia Cardiovascular",
  CIRURGIA_CABECA_PESCOCO = "Cirurgia de Cabeça e Pescoço",
  CIRURGIA_DIGESTIVA = "Cirurgia do Aparelho Digestivo",
  CIRURGIA_GERAL = "Cirurgia Geral",
  CIRURGIA_PEDIATRICA = "Cirurgia Pediátrica",
  CIRURGIA_PLASTICA = "Cirurgia Plástica",
  CIRURGIA_TORACICA = "Cirurgia Torácica",
  CIRURGIA_VASCULAR = "Cirurgia Vascular",
  CLINICA_MEDICA = "Clínica Médica",
  DERMATOLOGIA = "Dermatologia",
  ENDOCRINOLOGIA = "Endocrinologia e Metabologia",
  ENDOSCOPIA = "Endoscopia",
  GASTROENTEROLOGIA = "Gastroenterologia",
  GERIATRIA = "Geriatria",
  GINECOLOGIA_OBSTETRICIA = "Ginecologia e Obstetrícia",
  HEMATOLOGIA = "Hematologia e Hemoterapia",
  HEPATOLOGIA = "Hepatologia",
  HOMEOPATIA = "Homeopatia",
  INFECTOLOGIA = "Infectologia",
  MASTOLOGIA = "Mastologia",
  MEDICINA_DE_EMERGENCIA = "Medicina de Emergência",
  MEDICINA_DO_ESPORTO = "Medicina do Esporte",
  MEDICINA_DO_TRABALHO = "Medicina do Trabalho",
  MEDICINA_DE_FAMILIA = "Medicina de Família e Comunidade",
  MEDICINA_FISICA_REABILITACAO = "Medicina Física e Reabilitação",
  MEDICINA_INTENSIVA = "Medicina Intensiva",
  MEDICINA_LEGAL = "Medicina Legal e Perícia Médica",
  NEFROLOGIA = "Nefrologia",
  NEUROCIRURGIA = "Neurocirurgia",
  NEUROLOGIA = "Neurologia",
  NUTROLOGIA = "Nutrologia",
  OFTALMOLOGIA = "Oftalmologia",
  ONCOLOGIA_CLINICA = "Oncologia Clínica",
  ORTOPEDIA_TRAUMATOLOGIA = "Ortopedia e Traumatologia",
  OTORRINOLARINGOLOGIA = "Otorrinolaringologia",
  PATOLOGIA = "Patologia",
  PATOLOGIA_CLINICA = "Patologia Clínica/Medicina Laboratorial",
  PEDIATRIA = "Pediatria",
  PNEUMOLOGIA = "Pneumologia",
  PSIQUIATRIA = "Psiquiatria",
  RADIOLOGIA = "Radiologia e Diagnóstico por Imagem",
  RADIOTERAPIA = "Radioterapia",
  REUMATOLOGIA = "Reumatologia",
  UROLOGIA = "Urologia",
}

export const especialidadesMedicas = Object.entries(EspecialidadesMedicas).map(
  ([key, value]) => ({
    value: EspecialidadesMedicas[key as keyof typeof EspecialidadesMedicas],
    label: value,
  }),
);

export const diasDaSemana = [
  { value: 0, label: "Domingo" },
  { value: 1, label: "Segunda-feira" },
  { value: 2, label: "Terça-feira" },
  { value: 3, label: "Quarta-feira" },
  { value: 4, label: "Quinta-feira" },
  { value: 5, label: "Sexta-feira" },
  { value: 6, label: "Sábado" },
];

export const horariosDaManhaDisponiveis = [
  { value: "08:00", label: "08:00" },
  { value: "08:30", label: "08:30" },
  { value: "09:00", label: "09:00" },
  { value: "09:30", label: "09:30" },
  { value: "10:00", label: "10:00" },
  { value: "10:30", label: "10:30" },
  { value: "11:00", label: "11:00" },
  { value: "11:30", label: "11:30" },
  { value: "12:00", label: "12:00" },
];

export const horariosDaTardeDisponiveis = [
  { value: "13:00", label: "13:00" },
  { value: "13:30", label: "13:30" },
  { value: "14:00", label: "14:00" },
  { value: "14:30", label: "14:30" },
  { value: "15:00", label: "15:00" },
  { value: "15:30", label: "15:30" },
  { value: "16:00", label: "16:00" },
  { value: "16:30", label: "16:30" },
  { value: "17:00", label: "17:00" },
  { value: "17:30", label: "17:30" },
  { value: "18:00", label: "18:00" },
];
