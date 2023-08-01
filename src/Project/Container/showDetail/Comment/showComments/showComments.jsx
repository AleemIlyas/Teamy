import styles from './showComments.module.css'

export default function showComments() {
  return (
    <div className='mt-5'>
        <div className={['mb-3 flex rounded-xl flex-row items-center pt-4 pb-4 ml-6 relative z-0' ,styles.show].join(' ')}>
            <img className='absolute -left-7 rounded-full border-double border-white border-spacing-2' src="https://avatars2.githubusercontent.com/u/6124" width={52} alt="" />
            <div className='ml-9'>
                <h3 className='font-bold'>Helena Hello<span className='font-medium'> ,Designer </span></h3>
                <p className='font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis voluptas eum consectetur harum ratione ex, unde temporibus nisi aspernatur corporis aut optio, velit ea commodi quibusdam totam numquam nihil.</p>
            </div>
        </div>


        <div className={['mb-3 flex rounded-xl flex-row items-center pt-4 pb-4 ml-6 relative z-0' ,styles.show].join(' ')}>
            <img className='absolute -left-7 rounded-full border-double border-white border-spacing-2' src="https://avatars2.githubusercontent.com/u/6136" width={52} alt="" />
            <div className='ml-9'>
                <h3 className='font-bold'>Andy Somon<span className='font-medium'> ,Designer </span></h3>
                <p className='font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis voluptas eum consectetur harum ratione ex, unde temporibus nisi aspernatur corporis aut optio, velit ea commodi quibusdam totam numquam nihil.</p>
            </div>
        </div>


    </div>
  )
}
