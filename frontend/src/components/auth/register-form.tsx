"use client"

import { setAuthCookie } from '@/actions/set-auth-cookie'
import { useAuthStore } from '@/store/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useState, useTransition, ChangeEvent, FormEvent } from 'react'
import z from "zod"
import { register } from '@/actions/register'

const schema = z.object({
  name: z.string().min(2, { message: 'nome deve ter pelo menos dois caracteres' }),
  email: z.email({ message: 'email inválido' }),
  password: z.string().min(6, { message: 'senha deve ter pelo menos 6 caracteres' }),
  confirmPassword: z.string()
}). refine(data => data.password === data.confirmPassword, {
  message: 'as senhas não coincidem',
  path: ['confirmPassword']
})

type ErrorStructure = {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
  form?: string
}

export const RegisterForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState<ErrorStructure>({})
  const [pending, startTransition] = useTransition()
  const authStore = useAuthStore(state => state)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = schema.safeParse(form)

    if(!result.success) {
      const fieldErrors: any = {}
      result.error.issues.forEach(err => {
        if(err.path[0]) {
          fieldErrors[err.path[0]] = err.message
        }
      })

      setErrors(fieldErrors)
      return
    }

    setErrors({})
    startTransition(async () => {
        const res = await register(form) 
        if(res.error) {
          setErrors({ form: res.error })
        } else {
          redirect('/login')
        }
    })

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({...form,[e.target.name]: e.target.value}))
    setErrors(errors => ({ ...errors, [e.target.name]: undefined, form: undefined }))
  }

  return(
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 rounded-sm">
      <h2 className="text-xl font-bold mb-4">Cadastro</h2> 
      <div className="mb-4">
        <label className="mb-1">Nome</label>
        <input 
          autoFocus
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-200 px-3 py-2 rounded-sm"
          disabled={pending}
        />

        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
      </div>
      <div className="mb-4">
        <label className="mb-1">Email</label>
        <input 
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 px-3 py-2 rounded-sm"
          disabled={pending}
        />

        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
      </div>
      <div className="mb-4">
        <label className="mb-1">Senha</label>
        <input 
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-200 px-3 py-2 rounded-sm"
          disabled={pending}
        />

        {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
      </div>
      <div className="mb-4">
        <label className="mb-1">Confirmar Senha</label>
        <input 
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-200 px-3 py-2 rounded-sm"
          disabled={pending}
        />

        {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-sm cursor-pointer"
        disabled={pending}
      >
        {pending ? 'Cadastrando...' : 'Cadastrar'}
      </button>
      {errors.form && <div className="text-red-500 text-sm mt-1">{errors.form}</div>}
      <div className="text-center text-gray-500 text-sm mt-4">
        <Link href={'/login'}>Já tem conta? Faça login!</Link>
      </div>
     
    </form>
  )
}