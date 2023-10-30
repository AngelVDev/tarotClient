import styles from "../styles/lecturas.module.css";
import Card from "../components/Card/Card";
import { Service } from "../models/service.model";
import { Services } from "../models/services";
import RootLayout from "./layout";

type Props = Service[];
const services: Props = Services.filter(
  (service) => service.tipo === "Lectura"
);

const Lecturas = () => {
  return (
    <RootLayout>
      <main>
        <header className={styles.lecturas_header}>Todas mis lecturas</header>
        <section className={styles.cards_container}>
          {services.map((srv) => (
            // staticData && staticData.map(srv => (
            <Card key={srv.name} props={srv} />
          ))}
        </section>
      </main>
    </RootLayout>
  );
};

export default Lecturas;