const Footer = () => {
    const date1 = new Date();
    const year = date1.getUTCFullYear();
  return (
    <footer className="container-clamp spacing-clamp-lg text-center font-sans">
      <p className="text-clamp-base">© {year}. Jucal Asitok.</p>
    </footer>
  )
}

export default Footer
