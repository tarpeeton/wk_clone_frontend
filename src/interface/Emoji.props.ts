export interface EmojiPickerProps {
  setPickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleEmojiClick: (emoji: string) => void;
}