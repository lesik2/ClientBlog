import style from '@styles/ui/typography.module.scss';


export function Typography() {
  return (
    <div>
      <h1>Heading H1</h1>
      <h2>Heading H2</h2>
      <h3>Heading H3</h3>
      <h4>Heading H4</h4>
      <h5>Heading H5</h5>
      <h6>Heading H6</h6>
      <br/>
      <br/>
      <h3>Body 1</h3>
      <p className={style.parag1}>Apparently we had reached a great height in the atmosphere</p>
      <h3>Body 2</h3>
      <p className={style.parag2}>Apparently we had reached a great height in the atmosphere</p>
    </div>
  );
}
