export interface IReply {
	handleChange: (e: React.ChangeEvent<HTMLDivElement>) => void;
	inputDivRef: React.RefObject<HTMLDivElement>;
	handleSubmit: () => void ;
}
