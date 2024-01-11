import style from '@styles/ui/button.module.scss'


export interface IButton{
  type:  'secondary'| 'primary';
}
export function Button({type='primary'}:IButton) {
  return (
    <button type="button" className={type === 'primary'? style.primary: style.secondary}>
      Read More {'>'}
    </button>
  )
}
