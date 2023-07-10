export default function HobbyLinks(){
    const hobbyLinks = ["https://www.springfieldleather.com/", "https://www.sheldonbrown.com/"];
    return (
        <div>
            <h3 style={{color: "rgb(46, 158, 147)"}}>Hobbies</h3>
            <br />
            <a href= {hobbyLinks[0]}>Leather Work<br /></a>
            <br />
            <a href= {hobbyLinks[1]}>Bicycles</a>
        </div>
    )
}