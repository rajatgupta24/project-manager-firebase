import { useParams } from "react-router-dom"

function Details() {
    const id = useParams().id;
    console.log(id)
    return (
        <>
            <div>
                <div>
                    <p>Title - {id}</p>
                    <p>sdfg hsdfg uiosdf hfdsgn olyhdfgn iodfn iodfn fodi dfoidf iodfgnn dfjhdf idfgni pojm,h b tyrsad frgo0f mg </p>
                </div>
                <div>
                    <div>Posted by RG</div>
                    <div>2 Dec, 2020</div>
                </div>
            </div>            
        </>
    )
}

export default Details;
