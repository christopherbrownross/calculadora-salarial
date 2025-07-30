/* 
INFORMACIÓN LEGAL COLOMBIA 2024
===============================

Esta aplicación calcula deducciones basadas en la legislación colombiana vigente.

DEDUCCIONES OBLIGATORIAS:
========================

1. SALUD (4% del salario base)
   - Aplica sobre el salario base únicamente
   - No aplica sobre auxilios no constitutivos de salario
   - Máximo: 25 SMMLV (Salarios Mínimos Mensuales Legales Vigentes)

2. PENSIÓN (4% del salario base)
   - Aplica sobre el salario base únicamente
   - No aplica sobre auxilios no constitutivos de salario
   - Máximo: 25 SMMLV

3. RETENCIÓN EN LA FUENTE
   - Calculada según tabla oficial DIAN 2024
   - Basada en UVT (Unidad de Valor Tributario)
   - UVT 2024: $47,065 COP

AUXILIOS NO CONSTITUTIVOS DE SALARIO:
===================================

Los siguientes auxilios NO son base para cálculo de prestaciones sociales
ni para deducciones de salud y pensión (según normativa colombiana):

✅ Auxilio de Alimentación: Hasta $938,000 COP mensuales (exento)
✅ Auxilio de Conectividad: $206,710 COP (beneficio empresarial)
✅ Auxilio de Deporte: $275,570 COP (beneficio empresarial)
✅ Seguro de Vida: $50,454 COP (beneficio empresarial)
✅ Medicina Prepagada: $367,616 COP (beneficio empresarial)

TRATAMIENTO DE RSUs (RESTRICTED STOCK UNITS):
============================================

- Las RSUs se consideran ingresos laborales cuando se hace el vesting
- Están sujetas a retención en la fuente
- Se calculan al valor de mercado en el momento del vesting
- Se convierten a pesos colombianos usando la tasa representativa del mercado
- IMPORTANTE: Se aplica la deducción del 40% sobre ingresos laborales (salario + RSUs)

DEDUCCIÓN DEL 40% SOBRE INGRESOS LABORALES:
==========================================

Según el artículo 387 del Estatuto Tributario y la Ley 2277 de 2022:
- Se puede deducir hasta el 40% de los ingresos laborales
- Aplica sobre salario base + RSUs + otros ingresos laborales
- Esta deducción se aplica ANTES de calcular la retención en la fuente
- Límite: No puede superar el 40% del ingreso gravable

TABLA DE RETENCIÓN EN LA FUENTE 2024:
====================================

Rango de Ingresos (en UVT anuales) | Tarifa
-----------------------------------|--------
Hasta 95 UVT                      | 0%
Más de 95 hasta 150 UVT           | 19%
Más de 150 hasta 360 UVT          | 28%
Más de 360 UVT                    | 33%

PROCESO DE CÁLCULO DE RETENCIÓN:
===============================

1. Calcular ingreso gravable mensual (salario + RSUs)
2. Aplicar deducción del 40%
3. Multiplicar por 12 para obtener base anual
4. Convertir a UVT (dividir entre $47,065)
5. Aplicar tabla de retención según tramos
6. Dividir entre 12 para obtener retención mensual

CONSTANTES 2024:
===============
- Salario Mínimo: $1,300,000 COP
- UVT: $47,065 COP
- Auxilio de Transporte: $162,000 COP (no aplica para salarios > 2 SMMLV)

NOTAS IMPORTANTES:
=================
1. Esta calculadora es una herramienta de referencia
2. Para cálculos oficiales, consulte siempre con un contador
3. Las leyes pueden cambiar durante el año
4. Algunos beneficios pueden tener tratamientos especiales según el empleador

FUENTES LEGALES:
===============
- Código Sustantivo del Trabajo
- Estatuto Tributario (Decreto 624 de 1989)
- Resoluciones DIAN vigentes
- Decretos del Ministerio de Trabajo

Última actualización: 2024
*/

/**
 * LEGISLACIÓN COLOMBIANA 2025 - CÁLCULO DE NÓMINA
 * 
 * Este archivo documenta la legislación colombiana vigente para 2025
 * aplicada al cálculo de nómina, deducciones y retenciones.
 * 
 * VALORES BASE 2025:
 * - UVT (Unidad de Valor Tributario): $49,799
 * - SMMLV (Salario Mínimo Mensual Legal Vigente): $1,423,500
 * - Auxilio de Transporte: $200,000
 * - SMMLV Nominal (incluye auxilio): $1,623,500
 */

// ============================================================================
// 1. INGRESOS LABORALES Y PRIMAS
// ============================================================================

/**
 * PRIMAS LEGALES OBLIGATORIAS
 * 
 * Prima de Servicios (Art. 306 CST):
 * - Prima de mitad de año: 15 días de salario (pagada en junio)
 * - Prima de final de año: 15 días de salario (pagada en diciembre)
 * - Cálculo mensualizado: salario_base / 12 para cada prima
 * 
 * Intereses sobre Cesantías (Art. 99 Ley 50/1990):
 * - 12% anual sobre el valor de las cesantías
 * - Cálculo mensualizado: (salario_base * 0.12) / 12
 * 
 * PRIMAS EXTRALEGALES:
 * - Prima especial Twilio: 10% del salario base anualizado
 * - Cálculo mensualizado: (salario_base * 12 * 0.10) / 12
 * 
 * TRATAMIENTO TRIBUTARIO:
 * - Las primas son ingresos gravables para retención en la fuente
 * - No generan deducciones de salud y pensión (solo sobre salario base)
 * - Sí aplican para el cálculo del Fondo de Solidaridad Pensional
 */

// ============================================================================
// 2. DEDUCCIONES OBLIGATORIAS
// ============================================================================

const LEGISLACION_COLOMBIA_2025 = {
    // VALORES OFICIALES 2025
    UVT_2025: 49799, // Unidad de Valor Tributario 2025 - DIAN
    SMMLV_2025: 1423500, // Salario Mínimo Mensual Legal Vigente 2025
    AUXILIO_TRANSPORTE_2025: 200000, // Auxilio de transporte 2025
    
    // DEDUCCIONES OBLIGATORIAS
    SALUD: {
        porcentaje: 0.04, // 4%
        base: "Salario base",
        norma: "Ley 100 de 1993, Art. 204"
    },
    
    PENSION: {
        porcentaje: 0.04, // 4%
        base: "Salario base",
        norma: "Ley 100 de 1993, Art. 17"
    },
    
    // FONDO DE SOLIDARIDAD PENSIONAL (FSP)
    FONDO_SOLIDARIDAD_PENSIONAL: {
        descripcion: "Contribución obligatoria para salarios superiores a 4 SMMLV",
        base_calculo: "Salario en relación con SMMLV",
        tabla_2025: {
            "4-16 SMMLV": "1%",
            "16-17 SMMLV": "1.2%",
            "17-18 SMMLV": "1.4%",
            "18-19 SMMLV": "1.6%",
            "19-20 SMMLV": "1.8%",
            "Más de 20 SMMLV": "2%"
        },
        norma: "Ley 100 de 1993, Art. 135",
        nota: "La reforma pensional (Ley 2381 de 2024) está suspendida hasta julio 1, 2025"
    },
    
    // DEDUCCIÓN DEL 40% EN INGRESOS LABORALES
    DEDUCCION_40_PORCIENTO: {
        descripcion: "Deducción del 40% sobre ingresos laborales con límite de 790 UVT anuales",
        limite_anual_2025: "790 UVT = $39,341,210",
        limite_mensual_2025: "65.83 UVT = $3,278,434",
        aplicacion: "Se aplica sobre salario + RSUs, pero no puede superar el límite establecido",
        base_legal: "Art. 206 numeral 10 del Estatuto Tributario, Ley 2277 de 2022",
        proceso: [
            "1. Calcular ingreso gravable (salario + RSUs)",
            "2. Calcular 40% del ingreso gravable",
            "3. Comparar con límite mensual (790 UVT ÷ 12)",
            "4. Aplicar el menor entre ambos valores",
            "5. Sobre el resultado aplicar tabla de retención en UVT"
        ],
        nota: "El límite de 790 UVT corresponde al 25% de renta exenta establecido en la reforma tributaria"
    },
    
    // RETENCIÓN EN LA FUENTE POR INGRESOS LABORALES
    RETENCION_FUENTE: {
        descripcion: "Retención en la fuente sobre ingresos laborales",
        tabla_uvt_2025: {
            "0-95 UVT": "0%",
            "95-150 UVT": "19%",
            "150-360 UVT": "28%",
            "Más de 360 UVT": "33%"
        },
        procedimiento: [
            "1. Calcular base gravable anual (después de deducción 40%)",
            "2. Convertir a UVT dividiendo entre UVT 2025 ($49,799)",
            "3. Aplicar tabla progresiva de retención",
            "4. Dividir entre 12 para obtener retención mensual"
        ],
        norma: "Decreto 1625 de 2016, Art. 383"
    },
    
    // RSUs (RESTRICTED STOCK UNITS)
    RSU: {
        tratamiento_tributario: "Se consideran ingresos laborales gravables",
        inclusion: "Se suman al salario para efectos de retención en la fuente",
        deduccion_40: "Aplica la deducción del 40% sobre RSUs + salario",
        norma: "Concepto DIAN 100203142-760 de 2018"
    }
};