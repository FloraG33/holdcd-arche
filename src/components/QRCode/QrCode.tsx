import React from 'react'
import QRCode from 'qrcode.react';
import { useTranslations } from 'next-intl';

function QrCode() {
    const t = useTranslations('Contact');
    const vcfUrl = '/contact.vcf';
    return (
        <div >
            <h2 style={{marginBottom: '12px', textAlign: 'center'}}>{t('qrcode')}</h2>
            <QRCode value={`${window.location.origin}${vcfUrl}`} style={{margin: 'auto'}}/>
        </div>
    )
}

export default QrCode
