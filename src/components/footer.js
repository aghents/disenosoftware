import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export default function Footer() {
    return (
        <CDBFooter className="container-fluid">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <span className="ml-3 h5 font-weight-bold">Uruchkech</span>
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            Somos una empresa de turismo dedicada a entregarte una experiencia no un viaje
                        </p>
                        <CDBBox display="flex" className="mt-4">
                            <CDBBtn flat color="dark">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="mx-3">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Nosotros
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="#">Home</CDBFooterLink>
                            <CDBFooterLink href="#">Ubicación</CDBFooterLink>
                            <CDBFooterLink href="#">Newsletter</CDBFooterLink>
                            <CDBFooterLink href="#">Blog</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Help
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="#">Servicio al cliente</CDBFooterLink>
                            <CDBFooterLink href="#">Contacto</CDBFooterLink>                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Servicios
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="#">Lugares</CDBFooterLink>
                            <CDBFooterLink href="#">Viajes</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-5">&copy; Uruchkech, 2022. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>
    );
}