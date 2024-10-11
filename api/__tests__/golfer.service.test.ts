import { GolferService } from "../src/services/golfer.service";
import GolferRepository from "../src/repositories/golfer.repository";
import bcrypt from "bcrypt";
import { Golfer } from "../src/models/golfer.model";
import { Decimal } from "@prisma/client/runtime/library";

jest.mock("../src/repositories/golfer.repository");
 
describe("GolferService Tests", () => {
  let golferService: GolferService;
  jest.spyOn(console, 'log');
  beforeEach(() => {
    golferService = new GolferService(new GolferRepository());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("login", () => {
    it("should return 'login successful' when login is successful", async () => {
      // Arrange
      const ngf = 123;
      const password = "password123";
      const hashedPassword = await bcrypt.hash(password, 10);

      // Mocking repository method with type casting
      (GolferRepository.prototype.login as jest.Mock).mockResolvedValueOnce(
        hashedPassword
      );

      // Act
      const result = await golferService.login(ngf, password);

      // Assert
      expect(result).toBe("login successful");
    });

    it("should return 'password incorrect' when login fails", async () => {
      // Arrange
      const ngf = 123;
      const password = "incorrectPassword";
      const validHashedPassword = await bcrypt.hash("validPassword", 10);

      // Mocking repository method with type casting
      (GolferRepository.prototype.login as jest.Mock).mockResolvedValueOnce(
        validHashedPassword
      );

      // Act
      const result = await golferService.login(ngf, password);

      // Assert
      expect(result).toBe("password incorrect");
    });
  });

  describe("getAllGolfers", () => {
    it("should return all golfers", async () => {
      // Arrange
      const mockGolfers = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ];

      // Mocking repository method with type casting
      (
        GolferRepository.prototype.getAllGolfers as jest.Mock
      ).mockResolvedValueOnce(mockGolfers);

      // Act
      const result = await golferService.getAllGolfers();

      // Assert
      expect(result).toEqual(mockGolfers);
    });
  });

  describe("GolferService getGolferById Tests", () => {
    it("should return a unique golfer by ID", async () => {
      // Arrange
      const mockGolferId = 1;
      const mockGolfer = { id: mockGolferId, name: "John Doe" };

      // Mocking repository method with type casting
      (
        GolferRepository.prototype.getGolferById as jest.Mock
      ).mockResolvedValueOnce(mockGolfer);

      // Act
      const result = await golferService.getGolferById(mockGolferId);

      // Assert
      expect(result).toEqual(mockGolfer);
      expect(console.log).toHaveBeenCalledWith(
        `service: unique golfer retrieved${mockGolfer}`
      );
    });
  });

  describe("GolferService getGolferByNgf Tests", () => {
    it("should return a unique golfer by NGF", async () => {
      // Arrange
      const mockNgf = 123;
      const mockGolfer = { id: 1, name: "Jane Doe", ngf: mockNgf };

      // Mocking repository method with type casting
      (
        GolferRepository.prototype.getGolferByNgf as jest.Mock
      ).mockResolvedValueOnce(mockGolfer);

      // Act
      const result = await golferService.getGolferByNgf(mockNgf);

      // Assert
      expect(result).toEqual(mockGolfer);
      expect(console.log).toHaveBeenCalledWith(
        `service: unique ngf golfer retrieved${mockGolfer}`
      );
    });
  });

  describe("GolferService updateGolferById Tests", () => {
    it("should update a golfer by ID", async () => {
      // Arrange
      const mockGolferId = 1;
      const mockGolfer: Golfer = {
        id: mockGolferId,
        name: "test user",
        age: 25,
        handicap: "7.8" as unknown as Decimal,
        homecourse: "Golf Course A",
        country: "BN",
        ngf: 127,
        password: "0",
        currentmatch_id: 1,
        currentflight_id: 1,
      };

      // Act
      await golferService.updateGolferById(mockGolferId, mockGolfer);

      // Assert
      expect(GolferRepository.prototype.updateGolferById).toHaveBeenCalledWith(
        mockGolferId,
        mockGolfer
      );
      expect(console.log).toHaveBeenCalledWith("service: golfer updated");
    });
  });
});
