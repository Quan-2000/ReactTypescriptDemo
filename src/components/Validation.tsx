type ValidationProps = {
  checked: boolean
}

export const Validation = (props: ValidationProps) => {
  return (
    <h2>{props.checked}</h2>
  )
}