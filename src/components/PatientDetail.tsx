import { toast } from 'react-toastify'
import { usePatientStore } from '../store'
import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'

type PatientDetailProps = {
  patient: Patient
}
export default function PatientDetail({ patient }: PatientDetailProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient)
  const getPatientById = usePatientStore((state) => state.getPatientById)
  const handleClick = () => {
    deletePatient(patient.id)
    toast.error(`El Paciente ${patient.name} ha sido eliminado correctamente`)
  }
  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <PatientDetailItem label='ID' data={patient.id} />
      <PatientDetailItem label='Nombre' data={patient.name} />
      <PatientDetailItem label='Propietario' data={patient.caretaker} />
      <PatientDetailItem label='Email' data={patient.email} />
      <PatientDetailItem label='Fecha Alta' data={patient.date.toString()} />
      <PatientDetailItem label='Síntomas' data={patient.symptoms} />
      <div className='flex justify-between flex-col lg:flex-row gap-3 mt-10'>
        <button
          className='py2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={() => getPatientById(patient.id)}>
          Editar
        </button>
        <button
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={handleClick}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
