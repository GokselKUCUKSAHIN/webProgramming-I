import Item from "./Item";

function ItemContainer() {

    // function preventDefault<T extends SyntheticEvent>(event: T, callback: (event: T) => void): void {
    //     event.preventDefault();
    //     callback(event);
    // }
    //
    // function handleEvent(e: SyntheticEvent) {
    //     console.log("hello");
    // }

    return (
        <div className="card-deck mb-3 text-center">
            <Item name="Ekmek" price={2} unit="adet" description="Somun ekmek" detail="200 gr"/>
            <Item name="Çikolata" price={5} unit="adet" description="Bitter Çikolata" detail="60 gr"/>
            <Item name="Domates" price={6} unit="kg" description="Domates" detail="Antalya Sera"/>
        </div>
    );
}

export default ItemContainer;