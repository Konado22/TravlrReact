
export function addTripPage() {

return (
    <form action=''>
        <label htmlFor='code'>Code</label>
        <input type="text" id="code" name="code"></input>
        <label htmlFor='name'>name</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor='resort'>resort</label>
        <input type="text" id="resort" name="resort"></input>
        <label htmlFor='perPerson'>perPerson</label>
        <input type="text" id="perPerson" name="perPerson"></input>
        <label htmlFor='image'>image</label>
        <input type="text" id="image" name="image"></input>
        <input type="submit" value='Submit'/>
    </form>
)
}