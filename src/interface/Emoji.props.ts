export interface EmojiPickerProps {
  mouseEnter: () => void;
  mouseLeave: () => void;
  handleEmojiClick: (emoji: string) => void;
}