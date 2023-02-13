export default function ImageComponent(props) {
    return (
        <div><p>imagen</p> {(props.randNumber < 1000) &&
            <div><p>: {props.alt}</p>
                <img key={props.id} src={props.src} alt={props.alt} /></div>}
        </div>
    );
}
