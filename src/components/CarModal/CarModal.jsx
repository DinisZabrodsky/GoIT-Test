
import closeSVG from '../../img/x.svg'
import css from './CarModal.module.scss'

export const CarModal = ({close, data}) => {
    return <>
        <div className={css.bacdrop} onClick={close} data-modal="modal">
            <div className={css.modal}>
                <button className={css.closeModal} onClick={close}><img src={closeSVG} alt='close modal' /></button>
                
                <div className={css.modalIMG}>
                    <img src={data.img} alt={data.make} />
                </div>
                
                <div className={css.carTitel}>
                    <p>{data.make} <span>{data.model}</span>, {data.year}</p> 
                </div>

                <div className={css.carTag}>
                    <div>
                        <span>{data.address[2]} | {data.address[1]} | {data.rentalCompany} | </span>
                    </div>

                    <div>
                        <span>{data.type} | {data.model} | {data.id} | {data.accessories[2]}</span>
                    </div>
                </div>

                <p className={css.description}>{data.description}</p>

                <p className={css.functionalities}>Accessories and functionalities:</p>
            
                <div className={css.carTag}>
                    <div>
                        <span>{data.address[2]} | {data.address[1]} | {data.rentalCompany} | </span>
                    </div>

                    <div>
                        <span>{data.type} | {data.model} | {data.id} | {data.accessories[2]}</span>
                    </div>
                </div>

                <p className={css.functionalities}>Rental Conditions:</p>

                <div className={css.price}>
                    <span>Minimum age : <span>25</span></span>
                    <span>Valid driver’s license</span>
                    <span>Security deposite required </span>
                    <span>Mileage : <span>{data.mileage}</span></span>
                    <span>Price : <span>{data.rentalPrice}</span></span>
                </div>

                <a  href="tel:+380730000000" className={css.modalButton}>
                Rental car
                </a>
            </div>
        </div>
    </>
}