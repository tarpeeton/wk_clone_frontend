export interface IFancy {
  setTogle: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedValue:React.Dispatch<React.SetStateAction<number | null>>;
  selectedValue: number | null;
}
