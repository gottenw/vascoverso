import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Revalidar a página inicial
    revalidatePath('/');

    return NextResponse.json({
      revalidated: true,
      message: 'Página inicial atualizada com sucesso',
      now: Date.now()
    });
  } catch (err) {
    return NextResponse.json({
      revalidated: false,
      message: 'Erro ao revalidar',
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}
