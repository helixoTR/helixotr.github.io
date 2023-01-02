import React from 'react'

function Footer({github}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
      <a className="text-blue-500 hover:underline" href="https://github.com/helixotr">Doğukan</a> tarafından oluşturuldu <span role="img" aria-label="heart">💙</span>
      </p>
    </div>
  )
}

export default Footer