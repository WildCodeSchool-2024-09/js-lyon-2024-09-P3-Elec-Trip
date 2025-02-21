import type { RowDataPacket } from "mysql2";
import BookABornesRepository from "../../src/modules/bookABorne/BookABornesRepository";

const objectSample = [
  {
    id: 5780,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 1,
  },
  {
    id: 5781,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
  {
    id: 5782,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
  {
    id: 5783,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
] as RowDataPacket[];

const objectSample2 = [
  {
    id: 5780,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 1,
  },
  {
    id: 5781,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 1,
  },
  {
    id: 5782,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 1,
  },
  {
    id: 5783,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
] as RowDataPacket[];

const objectSample3 = [
  {
    id: 5780,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
  {
    id: 5781,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
  {
    id: 5782,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 1,
  },
  {
    id: 5783,
    id_station: "FR*E13*PDARTYLIMONEST69760*1",
    station_id: 2532,
    available: 0,
  },
] as RowDataPacket[];

test("check if loop is well working", async () => {
  await expect(BookABornesRepository.returnBorneID(objectSample)).resolves.toBe(
    5781,
  );
  await expect(
    BookABornesRepository.returnBorneID(objectSample2),
  ).resolves.toBe(5783);
  await expect(
    BookABornesRepository.returnBorneID(objectSample3),
  ).resolves.toBe(5780);
});
