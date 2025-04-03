import Img from '../../../../public/assets/11.webp'
import Head from "@/Components/Head/Head";
import Form from './form';

export const metadata = {
    title: "Get in Touch with Us | OneTAC : Digital Backbone For India’s Tourism, Arts & Culture with",
    description: "Have a question, feedback, or just want to say hi? We'd love to hear from you!",
    url: 'https://onetac.org/contact',

    ogTitle: "Get in Touch with Us | OneTAC : Digital Backbone For India’s Tourism, Arts & Culture with",
    ogDescription: "Have a question, feedback, or just want to say hi? We'd love to hear from you!",
    ogUrl: 'https://onetac.org/contact',
}

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