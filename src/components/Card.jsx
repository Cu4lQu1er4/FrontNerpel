import Image from "next/image";

export default function CardInfo ({ image, description }) {
    return(
        <div className="flex justify-center items-center mt-5">
            <section className="justify-center items-center bg-white/20 p-10 rounded-2xl">
                <div className="flex justify-center items-center">
                    <Image src={image} width={200} height={200}/>
                </div>
                <p className="text-center text-white mt-5">{description}</p>
            </section>
        </div>
    )
}