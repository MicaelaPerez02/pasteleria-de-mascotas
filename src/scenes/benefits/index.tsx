import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Crossfit",
    description:
      "Entrenamiento basado en ejercicios con movimientos funcionales ejecutados a alta intensidad. Acompañamos adaptando los movimientos y cargas para que evoluciones sin prisa pero sin pausa más allá de tu edad y condición física.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Levantamiento de Pesas",
    description:
      "Deporte que consiste en el levantamiento del máximo peso posible en una barra. Te acompañamos enseñando la correcta técnica y ejecución de los movimientos para que puedas mejorar de forma segura.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Funcional",
    description:
      "El entrenamiento funcional es una clasificación de los ejercicios que implica entrenar el cuerpo para las actividades de la vida diaria. Acompañados de excelentes profesores que te guiarán en cada movimiento para que puedas mejorar y divertirte.",
  },
];

const benefitsTwo: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Crossfit Kids",
    description:
      "Crossfit adaptado para los más chicos, donde podrán divertirse mientras aprenden a mejorar su condición física y coordinación motriz.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Karate",
    description:
      "Arte marcial tradicional. Aprenderas la correcta técnica de los movimientos y la forma de ejecutarlos, mejorando tu coordinación y condición física.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Natación",
    description:
      "Siendo socio de Fenix, podrás disfrutar de descuentos en las instalaciones y clases de la pileta 'Aguas Unidas'.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MÁS QUE SOLO UN BOX</HText>
          <p className="my-5 text-sm">
            Practicar ejercicio y llevar un estilo de vida más activo requiere
            esfuerzo y tiempo. Tenemos instalaciones con equipamientos modernos,
            con un ambiente agradable e instructores cualificados y con
            vocación, entregados para mejorar la vida de las personas a través
            del fitness.
          </p>
        </motion.div>

        {/* benefits */}
        <div className="md: flex-wrap ">
          <motion.div
            className="mt-5 justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          <motion.div
            className="mt-5 justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefitsTwo.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
        </div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* description */}
          <div>
            {/*title */}
            <div>
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    CIENTOS DE PERSONAS ENTRENANDO{" "}
                    <span className="text-primary-500">FELICES</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*descript */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="mt-5">
                Todos podemos hacer Crossfit siempre y cuando los coaches te
                cuiden y nuestro principal objetivo es cuidar tu salud.
              </p>
              <p className="mb-5">
                Somos un grupo de personas que hacemos los que nos gusta y
                estamos rodeados de otras que sólo quieren entrenar
                divirtiéndose.
              </p>
            </motion.div>
            {/*button */}
            <div className="relative mt-16">
              <div className="">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Unite ahora
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;