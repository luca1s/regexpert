import { Dispatch, SetStateAction } from 'react';

export default function Correct({ index, setIndex }: { index: number, setIndex: Dispatch<SetStateAction<number>> }) {
    return <button className="btn btn-primary mt-5" onClick={() => setIndex(index + 1)}>Next Challenge</button>;
}