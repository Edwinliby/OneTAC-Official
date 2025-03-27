import Img from '../../../../public/assets/11.webp'
import Head from "@/Components/Head/Head";
import Form from './form';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"How OneTAC Works for You"}
                subTitle={"Empowering travelers, artisans, businesses and volunteers to connect through India's cultural stories"}
            />
            <Form />
        </>
    )
}