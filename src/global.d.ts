declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.mp3' {
  const content: string;
  export default content;
}
declare module '*.woff';
declare module '*.ttf';

type MessagesEn = typeof import('./messages/en.json');
type MessagesRu = typeof import('./messages/ru.json');
declare interface IntlMessages extends MessagesEn, MessagesRu {}
