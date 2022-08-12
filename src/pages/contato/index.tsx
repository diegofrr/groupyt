import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import firebase from "../../services/firebase";

const usersCollectionRef = firebase.firestore().collection('users')

const Contato: NextPage = () => {

    useEffect(() => {

        (async () => {
            await usersCollectionRef.onSnapshot(docs => {
                docs.forEach(doc => {
                    console.log(doc.data())
                })
            })
           
        })();


    },[])

    return (
        <div>PAGINA CONTATO</div>
    )
}

export default Contato;

export const getServerSideProps: GetServerSideProps = async (context) => {



    return {
        props: {}
    }
}