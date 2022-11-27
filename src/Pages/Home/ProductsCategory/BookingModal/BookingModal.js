import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingModal = () => {

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Null</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" disabled value={user.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        
                        <input name="email" type="email" disabled value={user.email} placeholder="Email Address" className="input w-full input-bordered" />
                        
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        
                        <input name="location" type="text" placeholder="Meeting location" className="input w-full input-bordered" required />
                        
                        <input name="price" type="text" disabled value='14000' placeholder="Price" className="input w-full input-bordered" />
                        
                        <div className="modal-action" >
                            <label htmlFor="booking-modal" className="btn btn-primary" >Submit</label>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;