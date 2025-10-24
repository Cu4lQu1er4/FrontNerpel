import Image from "next/image";
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import card_info from '@/data/card-info';

export default function Home() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <section className="h-screen mt-30">
            <h1 className=" text-white text-center">
              <span className="block leading-normal text-6xl font-semibold">Tejidos de alta calidad</span>
              <span className="block leading-normal text-6xl font-semibold">100% Colombiano</span>
              <br></br>
              <span className="block leading-normal text-2xl font-medium">Comprometidos con la excelencia y soluciones </span>
              <span className="block leading-normal text-2xl font-medium">innovadoras en textiles.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-10 flex-wrap">
              {card_info.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
        </section>
        <section>
          <h1>Hola</h1>
        </section>
      </body>
    </html>  
  );
}
