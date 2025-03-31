import Img from '../../../../public/assets/11.webp'
import Head from "@/Components/Head/Head";
import Form from './form';

export default function page() {
    return (
        <>
            <Head
                img={Img}
                title={"Get in Touch with Us"}
                subTitle={"Have a question, feedback, or just want to say hi? We'd love to hear from you!"}
            />
            <Form />
        </>
    )
}