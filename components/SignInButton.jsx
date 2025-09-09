"use client"
import { signIn } from "next-auth/react"

export default function SignInButtons({ providers }) {

  if (!providers) return null;
  return (
    <div className="flex justify-center space-x-7 mt-20">
      <img className="hidden object-cover rotate-6 md:inline-flex md:w-48" src="/insta.avif" alt="Instagram image" />
      <div>
        {Object.values(providers).map(provider => (
          <div key={provider.name} className="flex flex-col items-center">
            <img className="w-32 object-cover" src="/instal.avif" alt="Instagram Image" />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes.
            </p>
            <button 
              onClick={() => signIn(provider.id, { callbackUrl: '/' })} 
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in With {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
