import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const notes = await query(
      'SELECT * FROM notes ORDER BY created_at DESC'
    );

    return NextResponse.json(notes);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Error obteniendo notas' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { title, content, type, color } = body;

    const result = await query(
      `
      INSERT INTO notes (title, content, type, color)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [title, content, type, color]
    );

    return NextResponse.json(result[0], {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Error creando nota' },
      { status: 500 }
    );
  }
}