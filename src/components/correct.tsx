export default function Correct({ index, setIndex }: { index: number, setIndex: (index: number) => void }) {
    return <button className="btn btn-primary mt-5" onClick={() => setIndex(index + 1)}>Next Challenge</button>;
}