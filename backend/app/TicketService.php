<?php

namespace App;

use App\Models\Ticket;
use Illuminate\Support\Facades\DB;

class TicketService
{
    /**
     * Create a new class instance.
     */
    public function move(array $data, Ticket $ticket)
    {
        $currentBoardId = $ticket->board_id;
        $newBoardId = $data['board_id'] ?? null;
        $newRank = $data['ranke'];

        try {
            DB::beginTransaction();

            $isSameBoard = ($currentBoardId == $newBoardId) || !$newBoardId;


            if ($isSameBoard && $ticket->ranke < $newRank) {

                // \Log::info('Decrementing rank between: ', [
                //     'start' => $ticket->rank + 1,
                //     'end' => $newRank
                // ]);

                Ticket::where('board_id', $ticket->board_id)
                    ->whereBetween('ranke', [$ticket->rank + 1, $newRank])
                    ->decrement('ranke');

            } else if ($isSameBoard && $ticket->ranke > $newRank) {

                // \Log::info('Incrementing rank between: ', [
                //     'start' => $newRank,
                //     'end' => $ticket->rank - 1
                // ]);

                Ticket::where('board_id', $ticket->board_id)
                    ->whereBetween('ranke', [$newRank, $ticket->rank - 1])
                    ->increment('ranke');

            } else if(!$isSameBoard) {
                // Adjust ranks in the old board
                Ticket::where('board_id', $currentBoardId)
                    ->where('ranke', '>', $ticket->ranke)
                    ->decrement('ranke');

                // Adjust ranks in the new board
                Ticket::where('board_id', $newBoardId)
                    ->where('ranke', '>=', $newRank)
                    ->increment('ranke');



            }

            $ticket->board_id = $newBoardId ?? $currentBoardId;
            $ticket->ranke = $newRank;
            $ticket->save();

            DB::commit();
            return $ticket;
        } catch (\Exception $e) {
            info($e->getMessage());
            DB::rollBack();
            throw $e;
        }
    }
}
