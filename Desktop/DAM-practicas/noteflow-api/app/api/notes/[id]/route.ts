import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  _request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const result = await query(
      'SELECT * FROM notes WHERE id = $1',
      [id]
    );

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Nota no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Error obteniendo nota' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { title, content, color } = body;

    const result = await query(
      `
      UPDATE notes
      SET
        title = COALESCE($1, title),
        content = COALESCE($2, content),
        color = COALESCE($3, color),
        updated_at = NOW()
      WHERE id = $4
      RETURNING *
      `,
      [title, content, color, id]
    );

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Nota no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Error actualizando nota' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const result = await query(
      'DELETE FROM notes WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Nota no encontrada' },
        { status: 404 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Error eliminando nota' },
      { status: 500 }
    );
  }
}