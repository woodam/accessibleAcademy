interface IErrorProps {
  statusCode: number
}

function Error({ statusCode }: IErrorProps) {
  return <>Error : {statusCode}</>
}

Error.getInitialProps = ({ res }: any) => {
  res.writeHead(302, { Location: `${process.env.BASE_URL}/new-admin/404` })
  res.end()
  return
}

export default Error
