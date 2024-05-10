interface FragmentProps {
  bar: string
  foo: string
}

export function DemoFragment(props: FragmentProps) {
  return (
    <>
      <div>{props.bar}</div>
      <br />
      <div>{props.foo}</div>
    </>
  )
}
